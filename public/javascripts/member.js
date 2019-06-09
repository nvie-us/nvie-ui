function fetchEnvironments () {
  $.ajax({
    url: '/blueprints',
    method: 'GET',
    success: (response) => {
      $(".lds-dual-ring").hide();
  
      let environments = response;

      $(".content-area").append('<div class="environments">');
  
      environments.map((environment) => {
        $(".environments").append(`
            <div class="environment">
                <div class="environment-image">
                    <img height="150" src="${environment.logo || 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png'}" />
                    <div class="quick-actions">
                      <button data-url="${environment.ghRepo}" data-name="${environment.envName}" class="btn-primary provision">Provision</button>
                      <button data-environment='${JSON.stringify(environment)}' class="btn-secondary view-details">View</button>
                    </div>
                </div>
                <div class="environment-name">${environment.envName}</div>
                <div class="environment-meta">
                    <div class="environment-created-by">${environment.team}</div>
                </div>
            </div>`
        );
      });
  
      $(".content").append('</div>');
    }
  });
}

function extractBlueprintInfo () {
  const urlParams = new URLSearchParams(window.location.search),
      blueprint = JSON.parse(urlParams.get('environment'));

  $(".environment-name").html(blueprint.envName);

  $(".stack").append(
  `
      <div class="tag">
          <span class="name">${blueprint.dockerBlueprint.os.split(':')[0]}</span>
          <span class="version">${blueprint.dockerBlueprint.os.split(':')[1]}</span>
      </div>
  `);

  blueprint.dockerBlueprint.binaries.map((binary) => {
      $(".stack").append(
      `
          <div class="tag">
              <span class="name">${binary}</span>
              <span class="version">Latest</span>
          </div>
      `);
  });

  $(".environment-view-actions .provision").data('name', blueprint.envName);
  $(".environment-view-actions .provision").data('url', blueprint.ghRepo);
}


$(document).on('click', '.view-details', function () {
  const environment = JSON.stringify($(this).data('environment'));


  window.location.href = `/member/environments/view?environment=${environment}`;
});

$(document).on('click', '.provision', function () {
  $.ajax({
    url: '/blueprints/provision',
    method: 'POST',
    data: {
      envName: $(this).data('name'),
      user: 'akshaye',
      ghRepo: $(this).data('url')
    },
    beforeSend: () => {
      $("#myModal .modal-content").find('.modal-body').html('<div class="lds-dual-ring"></div>');

      $("#myModal").css('display', 'block');

    },
    success: (response) => {
      if (!response.success) {
        toastr.error('Error provisioning. Our engineers are on this.');
        
        return;
      }
      
      
      toastr.success('Environment successfully provisioned!');

      $(".modal-header h2").html('Environment provisioned!');

      $("#myModal .modal-content").find('.modal-body').html(
        `
        <table cellpadding="10">
        <tr>
        <td>Id</td><td> ${response.details.id}</td>
        </tr>
        <tr>
        <td>Domain name</td><td><a target="_blank" href="http://${response.details.domainName}">${response.details.domainName}</a></td>
        </tr>
        <tr>
        <td>Host name</td><td>${response.details.hostname}</td>
        </tr>
        <tr>
        <td>Container name</td><td>${response.details.container_name}</td>
        </tr>
        <tr>
        <td>Container id</td><td>${response.details.container_id}</td>
        </tr>
        </table>
        <div class="snippet">
          ssh ubuntu@${response.details.domainName}
        </div>
        `
      );

      $("#myModal").css('display', 'block');

      navigator.clipboard.writeText(`ssh ubuntu@${response.details.domainName}`);
    }
  });
});

$(document).on('keyup', '.search', function (ev) {
  const searchTerm = ev.target.value;

  $('.environment').filter(function () {
      $(this).toggle($(this).find('.environment-name').text().indexOf(searchTerm) > -1);
  })
});

$(document).on('click', '.fa-times', function () {
  $("#myModal").css('display', 'none');
});