const apiLink = process.env.API;


export const fetchAppData = async () => {
    try {
      const response = await fetch(`https://localhost:4000/api/v1/recipes/fetch`,

       {next: { revalidate: 60 } });
       console.log('response: ', response);

      if (!response.ok) {
        console.error('Network response was not ok');

        return {
          sliders: []
        };
        // throw new Error('Network response was not ok');
      }
      const data = await response.json() ?? { sliders: [] };
      return data;
    } catch (error) {
      console.error('Error fetching app data:', error);
      
      return {
        sliders: []
      };
    }
  };

  export const fetchRecipes = async (id: number|null) => {
    if(id==null){
        try {
            const response = await fetch(`https://localhost:4000/api/v1/recipes/recipes`, 
            {next: { revalidate: 60 } }
              );
            if (!response.ok) {
              console.error('Network response was not ok')
              // throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching recipes data:', error);

            return []
          }
    } else {
        try {
            const response = await fetch(`https://localhost:4000/api/v1/recipes/recipes/${id}`,
            { next: { revalidate: 60 } }
              );
            if (!response.ok) {
              console.error('Network response was not ok')
              // throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error('Error fetching recipe data:', error);
            return [];
          }
    }
  };  
  
  export const search = async (term:string) => {
    try {
      const response = await fetch(`https://localhost:4000/api/v1/recipes/search?q=${term}`, 
      { next: { revalidate: 60 } }
      );
      if (!response.ok) {
        console.error('Network response was not ok');

        return [];
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching:', error);

      return [];
    }
  };
  
  export const userLogin = async (email:string, password:string) => {
    try {
      const response = await fetch('https://localhost:4000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
    });

      if (!response.ok) {
        console.error('Network response was not ok');

        // throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error login:', error);
      // throw error;
    }
  }; 


  export const userSignup = async (firstName:string, lastName:string, email:string, password:string, profileEmoji:number) => {
    try {
      //get users ip address
      const ipResponse = await fetch('https://api64.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;

      const response = await fetch('https://localhost:4000/api/v1/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password,
        'ip': ipAddress,
        'profileEmoji': profileEmoji,
      }),
    });

      if (!response.ok) {
        console.error('Network response was not ok');
        // throw new Error('Network response was not ok');
      }
      const data = await response;
      return data;
    } catch (error) {
      console.error('Error sign up new user:', error);
      // throw error;
    }
  }; 

  export const updateWatchList = async (apiToken: string, movieId: number) => {
    try {
      const response = await fetch(`https://localhost:4000/api/v1/users/watch-update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          movieIds: [movieId],
        }),
      });
  
      if (!response.ok) {
        console.error('Network response was not ok');

        // throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding movies:', error);
      // throw error;
    }
  };
  