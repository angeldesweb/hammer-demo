const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui:{
    themes:[
      {
        auto:{
          primary:'#7fba2a',
          secondary:'#000',
          "base-100":'#fff'
        },
        ilum:{
          primary:'#008fbe',
          secondary:'#7fba2a',
          "base-100":'#fff'
        }
      },
      "dark"
    ]
  },
  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
};

module.exports = config;
