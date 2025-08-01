import React from "react";
import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.TrainerId === parseInt(id));

  if (!trainer) {
    return <h2>Trainer not found!</h2>;
  }

  return (
    <div>
      <h2>Trainers Details</h2>
      <h3>
        {trainer.Name} ({trainer.Technology})
      </h3>
      <p>{trainer.Email}</p>
      <p>{trainer.Phone}</p>
      <h4>Skills:</h4>
      <ul>
        {trainer.Skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;
