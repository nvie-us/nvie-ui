let SELECTED_OPERATING_SYSTEM = null,
    SELECTED_OPERATING_SYSTEM_VERSION = null,
    SELECTED_BINARIES = [],
    DOCKER_PORT = null,
    ENVIRONMENT_NAME = null,
    REPOSITORY_URL = null;

function fetchEnvironments () {
    const environments = [
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Manish Shetty'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Manish Shetty'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Manish Shetty'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
        {
            name: 'Development Ubuntu Node Python',
            logo: 'https://assets.ubuntu.com/v1/8dd99b80-ubuntu-logo14.png',
            usedBy: 150,
            createdBy: 'Akshaye Shenoi'
        },
    ];
    
    $(".content-area").append('<div class="environments">');
    
    environments.map((environment) => {
        $(".environments").append(`
            <div class="environment">
                <div class="environment-image">
                    <img height="150" src="${environment.logo}" />
                </div>
                <div class="environment-name">${environment.name}</div>
                <div class="environment-meta">
                    <div class="environment-created-by">${environment.createdBy}</div>
                    <div class="environment-actions">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-copy"></i>
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            </div>`
        );
    });
    
    $(".content").append('</div>');
}

function fetchOperatingSystems () {
    const operatingSystems = [
        {
            logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
            versions: ['18.04', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
            label: 'ubuntu'
        },
        {
            logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
            versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
            label: 'ubuntu'
        },
        {
            logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
            versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
            label: 'ubuntu'
        },
        {
            logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
            versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
            label: 'ubuntu'
        },
        {
            logo: 'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
            versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
            label: 'ubuntu'
        }
    ],
        dependencies = [
            {
                logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                label: 'nodejs'
            },
            {
                logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                label: 'python'
            },
            {
                logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                label: 'nodejs'
            },
            {
                logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                label: 'python'
            },
            {
                logo: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
                versions: ['18.0.1', '17.3.2', '16.3.2', '15.2.2', '19.1.1'],
                label: 'nodejs'
            }
        ]

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

    dependencies.map((dependency, index) => {
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
            binaries: JSON.stringify(SELECTED_BINARIES)
        },
        success: (data) => {
            console.log(data);
        }
    });
});