import Trainer from "./trainer";

const TrainersMock = [
  new Trainer(1, "Abc", "Abc@abc.com", "1234567890", "JavaScript", [
    "React",
    "Node.js",
  ]),
  new Trainer(2, "Def", "Def@def.com", "0987654321", "Python", [
    "Django",
    "Flask",
  ]),
  new Trainer(3, "Ghi", "Ghi@ghi.com", "1122334455", "Java", [
    "Spring",
    "Hibernate",
  ]),
];

export default TrainersMock;
