import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons

const vuetify = createVuetify({
 
  icons: {
    defaultSet: 'mdi', // <-- Tell Vuetify to use MDI icons
  }
});

export default vuetify;
