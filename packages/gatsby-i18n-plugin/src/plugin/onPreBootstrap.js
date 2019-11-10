import fs from 'fs-extra';

export const onPreBootstrap = ({ store, reporter }) => {
  const activity = reporter.activityTimer('@igorko: copy redirect component');
  activity.start();

  const program = store.getState().program;

  const module = `
      const { Redirect } = require('gatsby-i18n');
      module.exports = Redirect;
  `;

  const dir = `${program.directory}/.cache/@igorko`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(`${dir}/redirect.js`, module);

  activity.end();
};

export default onPreBootstrap;
