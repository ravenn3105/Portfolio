import easeExhibit from './easeExh.jpg';
import PD from './PD.jpg';
import penguin from './penguin.png';
import titanic from "./titanic.jpg";

export const Bio = {
  name: "Riya Singh",
  roles: [
    "Machine Learning Developer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/ravenn3105",
  resume:
    "https://drive.google.com/file/d/1BWCZ-wnRjJZPFyyJU7lWpOLop_tumR4w/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/riyasingh3105/",
};

export const projects = [
    {
      title: "EaseExhibit",
      subtitle: "Python | Firebase | Discord",
      description:
        "Engineered a Discord-based solution for the college Project Exhibition, reducing repetitive tasks for students by 92% and saving an estimated  6 hours of a combined effort.",
      image: easeExhibit,
      link: "https://github.com/ravenn3105/HazelNut",
    },
    {
      title: "Parkinson Disease Detection",
      subtitle: "Python | Keras | Sklearn",
      description:
        "Analyzed a dataset of gait measures from 93 Parkinson's disease (PD) patients and 73 healthy controls to identify motor impairments.",
      image: PD,
      link: "https://github.com/ravenn3105/Parkinsons-detection-using-gait-analysis",
    },
    {
      title: "Palmer's Penguin Categorization",
      subtitle: "Python | Scikit-learn | Logistic regression",
      description:
        "Performed a comprehensive exploration of the Palmer Penguin dataset containing 344 data points using Python libraries like pandas and scikit-learn.",
      image: penguin,
      link: "https://github.com/ravenn3105/Palmer-penguin-categorization",
    },
    {
      title: "ML model on Titanic Dataset",
      subtitle: "Python | Random Forest | Adaboost | SVC",
      description:
        "A predictive model that answers the question: “what sorts of people were more likely to survive the sink?” using passenger data (ie name, age, gender, socio-economic class, etc).",
      image: titanic,
      link: "https://github.com/ravenn3105/ML-models-on-titanic-dataset",
    },
  ];

  export const skills =["Python","Sklearn","Pandas","Java", "React", "C++", "Firebase", "MySQL",];