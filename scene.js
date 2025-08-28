// 
export default {  
text: `  `, 
 choices: [    
{ label: 'Seek shelter in a nearby crevasse', next: 'crevasse' },    { label: 'Approach the distant warcamp', next: 'warcamp' }  ],  nextScenes: {    crevasse: {     
 text: 'You find safety and discover a mysterious spren.',      choices: []    },    warcamp: {      text: 'You are met by a patrol of bridgemen. They look wary.',     
  choices: []    }  }};
  
  import { spinner } from '@clack/prompts';

  // Example: Show a spinner while loading the next scene
  const s = spinner();
  s.start('Traveling to the Shattered Plains...');
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading or transition
  s.stop('You arrive at the Shattered Plains.');