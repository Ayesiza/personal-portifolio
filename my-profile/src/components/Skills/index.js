import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>Material-ui</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
         
          <li>Chrome Dev</li>
          <li>Git & Github</li>
        </div>
        <div>
          <strong>Uint Test:</strong>
         
          <li>React-test</li>
          <li>SupperTest</li>
        </div>
      </div>
    </div>
  );
};

export default Skills;