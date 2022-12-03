const Questions = ({current, form, totalQuestions}) => {
  const {register} = form;
  const getQuestion = () => {
    let questions = [
      "Wat is de volgende letter in dit rijtje: E, T, D, V, V, Z, Z, A ...",
      "Welk dier bestaat voor 75% uit wol?",
      "Noordpool of zuidpool?",
      "Stel: er liggen 27 appels. Je pakt er 8 weg. Hoeveel appels heb je?",
      "Een haan legt ei bovenop een kippenschuur. Naar welke kant rolt het ei?",
      "Een ongezonde snack.",
      "Wat is beter dan lopen?",
      "1 + 1 + 1 + 1 + 1",
    ];

    return (
      <div>
        {totalQuestions.map(
          (c, i) =>
            current === i && (
              <label key={i}>
                <span>{questions[i]}</span>
                <input
                  type="text"
                  defaultValue=""
                  autoFocus
                  ref={(input) => input && input.focus()}
                  {...register(`question.${i}.value`)}
                />
              </label>
            )
        )}
      </div>
    );
  };

  return getQuestion();
};

export default Questions;
