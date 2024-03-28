const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {},
    actions: {
      register: async (new_user) => {
        console.log(new_user);

        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_user),
          });

          const data = await resp.json();
          return data;
        } catch (error) {
          console.log(`Error en función register:`, error);
        }
      },

      login: async (e) => {
        const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        });
        const data = await resp.json();
        if (data.error) {
          console.log();
          data.error;
          return;
        }
        localStorage.setItem("data", data.auth_token);
        return data;
      },
    },
  };
};

export default getState;
