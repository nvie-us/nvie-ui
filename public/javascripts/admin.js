let SELECTED_OPERATING_SYSTEM = null,
    SELECTED_OPERATING_SYSTEM_VERSION = null,
    SELECTED_BINARIES = [],
    DOCKER_PORT = null,
    ENVIRONMENT_NAME = null,
    REPOSITORY_URL = null;

function fetchEnvironments () {
    $.ajax({
        url: '/blueprints',
        method: 'GET',
        success: (data) => {
            $(".lds-dual-ring").hide();

            let blueprints = data;

            $(".content-area").append('<div class="environments">');
    
            blueprints.map((blueprint, index) => {
                $(".environments").append(`
                    <div data-blueprint='${JSON.stringify(blueprint)}' class="environment">
                        <div class="environment-image">
                            <img height="150" src="${blueprint.logo || 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png'}" />
                        </div>
                        <div class="environment-name">${blueprint.envName}</div>
                        <div class="environment-meta">
                            <div class="environment-created-by">${blueprint.team}</div>
                            <div class="environment-actions">
                                <i data-blueprint='${JSON.stringify(blueprint)}' tooltip="Edit" class="fas fa-edit"></i>
                                <i tooltip="Copy Blueprint" class="fas fa-copy"></i>
                                <i tooltip="Delete Blueprint" class="fas fa-trash"></i>
                            </div>
                        </div>
                    </div>`
                );
            });
    
            $(".content").append('</div>');
        }
    });
}

function fetchOperatingSystems () {
    $.ajax({
        url: '/admin/available',
        method: 'GET', 
        success: (response) => {
            const { operatingSystems, binaries } = response;

            operatingSystems.map((operatingSystem, index) => {
                $(".operating-systems").append(
                `
                    <div data-os="${operatingSystem.label}" class="operating-system entity">
                        <img src="${operatingSystem.logo}" />
                        <div class="versions">
                            <select>
                            </select>
                        </div>
                    </div>
                `);
        
                operatingSystem.versions.map((version) => {
                    $(`.operating-system:nth-child(${index + 1}) select`).append(`<option>${version}</option>`);
                });
            });
        
            binaries.map((dependency, index) => {
                $(".dependencies").append(
                `
                    <div data-dependency="${dependency.label}" class="dependency entity">
                        <img src="${dependency.logo}" />
                        <div class="versions">
                            <select>
                            </select>
                        </div>
                    </div>
                `);
        
                dependency.versions.map((version) => {
                    $(`.dependency:nth-child(${index + 1}) select`).append(`<option>${version}</option>`);
                });
            });

        }
    });
}

function extractBlueprintInfo () {
    const urlParams = new URLSearchParams(window.location.search),
        blueprint = JSON.parse(urlParams.get('blueprint'));

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


$(document).on('click', '.create-new', () => {
    window.location.href = '/admin/environments/new';
});

$(document).on('click', '.entity', function () {
    if ($(this).attr('class').includes('operating-system')) {
        $('.operating-system').removeClass('selected');
    }

    $(this).toggleClass('selected');
});

$(document).on('click', '.submit', function () {
    SELECTED_OPERATING_SYSTEM = $('.operating-system.selected').data('os');
    SELECTED_OPERATING_SYSTEM_VERSION = $('.operating-system.selected').find('select').val();
    ENVIRONMENT_NAME = $('#environment_name').val(),
    DOCKER_PORT = $('#docker_port').val(),
    REPOSITORY_URL = $('#repository_url').val();
    
    $('.dependency.selected').each(function () {
        SELECTED_BINARIES.push($(this).data('dependency'));
    });

    $.ajax({
        url: '/blueprints',
        method: 'POST',
        beforeSend: () => {
            $(".submit").prop('disabled', true);
            $(".submit").toggleClass('disabled');
        },
        complete: () => {
            $(".submit").prop('disabled', false);
            $(".submit").toggleClass('disabled');
        },
        data: {
            name: ENVIRONMENT_NAME,
            dockerPort: DOCKER_PORT,
            repository: REPOSITORY_URL,
            os: SELECTED_OPERATING_SYSTEM + ':' + SELECTED_OPERATING_SYSTEM_VERSION,
            binaries: JSON.stringify(SELECTED_BINARIES),
            emails: $(".notify-emails").val()
        },
        success: (data) => {
            toastr.success('Successfully created the blueprint!');

            setTimeout(() => {
                let blueprint = {
                    envName: ENVIRONMENT_NAME,
                    dockerBlueprint: {
                        os: SELECTED_OPERATING_SYSTEM + ':' + SELECTED_OPERATING_SYSTEM_VERSION,
                        binaries: SELECTED_BINARIES
                    }
                };

                window.location.href = `/admin/environments/view?blueprint=${JSON.stringify(blueprint)}`;
            }, 300);
        }
    });
});

$(document).on('click', '.fa-edit', function () {
    const blueprint = JSON.stringify($(this).data('blueprint'));


    window.location.href = `/admin/environments/view?blueprint=${blueprint}`;
});

$(document).on('click', '.environment', function () {
    const blueprint = JSON.stringify($(this).data('blueprint'));


    window.location.href = `/admin/environments/view?blueprint=${blueprint}`;
});

$(document).on('click', '.provision', function () {
    $.ajax({
        url: '/blueprints/provision',
        method: 'POST',
        data: {
        envName: $(this).data('name'),
        user: 'shenny',
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
                <div class="snippet">
                    nv configure --domain ${response.details.domainName}
                    <br />nv connect
                </div>
                `
            );

            $("#myModal").css('display', 'block');
        }
    });
});

$(document).on('keyup', '.search', function (ev) {
    const searchTerm = ev.target.value;

    $('.environment-listing .environment').filter(function () {
        $(this).toggle($(this).find('.environment-name').text().indexOf(searchTerm) > -1);
    })
});

$(document).on('click', '.fa-bell', () => {
    $(".notification-area").toggle();
});

$(document).on('click', '.fa-times', function () {
    $("#myModal").css('display', 'none');
});
