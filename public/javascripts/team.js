function loadTeam () {
  const team = [
    {
      name: 'Manish Shetty',
      email: 'mnshty@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Akshaye Shenoi',
      email: 'akshu@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Aditya Walvekar',
      email: 'wally@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Arjun Narayan',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Bhargav Karanam',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Manish Shetty',
      email: 'mnshty@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Akshaye Shenoi',
      email: 'akshu@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Aditya Walvekar',
      email: 'wally@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Arjun Narayan',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Bhargav Karanam',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Manish Shetty',
      email: 'mnshty@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Akshaye Shenoi',
      email: 'akshu@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Aditya Walvekar',
      email: 'wally@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Arjun Narayan',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Bhargav Karanam',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Manish Shetty',
      email: 'mnshty@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Akshaye Shenoi',
      email: 'akshu@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Aditya Walvekar',
      email: 'wally@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Arjun Narayan',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    },
    {
      name: 'Bhargav Karanam',
      email: 'nari@gmail.com',
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    }
  ];

  team.map((team) => {
    $(".team").append(
    `
      <div class="team-member">
        <div class="team-member-avatar">
          <img height="30" src="${team.avatar}" />
        </div>
        <div class="team-member-details">
          <div class="team-member-name">${team.name}</div>
          <div class="team-member-email">${team.email}</div>
        </div>
      </div>
    `)
  })
}