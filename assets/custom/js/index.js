function submitHandler(e) {
  e.preventDefault();

  const nameElement = document.getElementById('name');
  const emailElement = document.getElementById('email');
  const happinessElement = document.getElementById('happiness');
  const placeElement = document.getElementById('place');
  const dayTimeElements = Array.from(
    document.querySelectorAll('input[name="dayTime"][type="radio"]')
  );
  const checkedTimeElement = dayTimeElements.filter((item) => item.checked)[0];
  const emotionElements = Array.from(
    document.querySelectorAll('input[name="emotion"][type="checkbox"]')
  );
  const experienceElement = document.getElementById('experience');

  const nameValue = nameElement.value;
  const emailValue = emailElement.value;
  const happinessValue = happinessElement.value;
  const placeValue = placeElement.value;
  const timeValue = checkedTimeElement.value;
  const emotionValues = emotionElements
    .filter((item) => item.checked)
    .map((item) => item.value);
  const experienceValue = experienceElement.value;

  const data = {
    name: nameValue,
    email: emailValue,
    happiness: happinessValue,
    place: placeValue,
    experience: experienceValue,
    time: timeValue,
    emotions: emotionValues,
  };
  console.log(data);
}
