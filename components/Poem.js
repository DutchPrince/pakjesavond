const Poem = ({values}) => {
  console.log(values);
  return (
    <p>
      Muziek voor {values[7].value.toLowerCase()}, correctie miljoenen.
      <br />
      Muziek voor de seizoenen.
      <br />
      <br />
      Muziek in de kamer, muziek om bij te slapen.
      <br />
      Muziek in de auto, muziek om te gapen.
      <br />
      <br />
      Muziek om mee te zingen of te klappen
      <br />
      Muziek om uit een ander {values[6].value.toLowerCase()} te tappen.
      <br />
      <br />
      Muziek voor {values[3].value.toLowerCase()} uur of een goed humeur
      <br />
      Muziek om te huilen, muziek als gezeur.
      <br />
      <br />
      Muziek op je oren, muziek uit je mond.
      <br />
      Muziek maakt je blij en houd je {values[5].value.toLowerCase()}, correctie
      gezond.
      <br />
      <br />
      Muziek voor je hart of lekker in je vel.
      <br />
      Muziek voor Mister {values[0].value.toUpperCase()}. of tante Nel.
      <br />
      <br />
      Muziek om mee te zingen en te {values[6].value.toLowerCase()}.
      <br />
      Muziek om te maken, muziek met veel kansen.
      <br />
      <br />
      Muziek op de {values[2].value.toLowerCase()} of je moers taal.
      <br />
      Muziek met veel kleur, muziek een beetje kaal.
      <br />
      <br />
      Muziek speel je naar {values[4].value.toLowerCase()} of in je uppie.
      <br />
      Muziek voor een {values[1].value.toLowerCase()} of voor een duppie.
      <br />
      <br />
      Muziek als een huis, of als een kasteel.
      <br />
      Muziek minimaal, te weinig of veel te veel.
      <br />
      <br />
      Muziek met veel noten en niet elektronisch.
      <br />
      Muziek heel erg snel, de muziek is subsonisch.
      <br />
    </p>
  );
};

export default Poem;
