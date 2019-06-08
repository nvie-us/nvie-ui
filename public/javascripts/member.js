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
                  <div class="quick-actions">
                    <button class="btn-primary provision">Provision</button>
                    <button class="btn-secondary view-details">View</button>
                  </div>
              </div>
              <div class="environment-name">${environment.name}</div>
              <div class="environment-meta">
                  <div class="environment-created-by">${environment.createdBy}</div>
              </div>
          </div>`
      );
  });
  
  $(".content").append('</div>');
}