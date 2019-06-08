function fetchEnvironments () {
  $.ajax({
    url: '/blueprints',
    method: 'GET',
    success: (response) => {
      let environments = response;

      $(".content-area").append('<div class="environments">');
  
      environments.map((environment) => {
        $(".environments").append(`
            <div class="environment">
                <div class="environment-image">
                    <img height="150" src="${environment.logo || 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png'}" />
                    <div class="quick-actions">
                      <button data-name="${environment.envName}" class="btn-primary provision">Provision</button>
                      <button class="btn-secondary view-details">View</button>
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

$(document).on('click', '.provision', function () {
  $.ajax({
    url: '/blueprints/provision',
    method: 'POST',
    data: {
      envName: $(this).data('name'),
      user: 'shenny'
    },
    success: (response) => {
      if (!response.success) {
        toastr.error('Error provisioning. Our engineers are on this.');
        
        return;
      }
      
      toastr.success('Environment successfully provisioned!');

      $("#myModal").find('div').html(
        `
        <table cellpadding="10">
        <tr>
        <td>Id</td><td> ${response.details.id}</td>
        </tr>
        <tr>
        <td>Domain name</td><td>${response.details.domainName}</td>
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
        `
      );

      $("#myModal").css('display', 'block');
    }
  });
});