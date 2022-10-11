import Score from "../Score/Score";


const Student = (props) => {
  console.log(props.student.scores)
  return (  
    <div>
    <h2>{props.student.name}</h2>
    <h4>{props.student.bio}</h4>
    {props.student.scores.map((score, index) =>
      <Score key={index} score={score}/> 
      )}
    </div>
  );
}
 
export default Student;

// I want the students name and bio displayed
// I want the score displayed