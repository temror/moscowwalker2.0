<template>
  <div class="main">
    <div class="container">
      <div class="main__content">
        <div class="main__title">
          Решает вечную проблему, куда же пойти погулять
        </div>
        <div class="main__subtitle">
          Ваш персональный гид по Москве, рассказывающий всякое интересное
        </div>
        <button class="main__register" @click="$router.push('/auth')">
          Зарегистрироваться
        </button>
        <a @click="$router.push('/auth')" class="main__login">Уже есть аккаунт? Войдите</a>
        <img src="@/assets/images/helloBanner/banner.png" alt="banner" class="main__banner" />
        <div class="main__itemsTitle">
          Сделйте ваши прогулки интересными, как никогда
        </div>
        <div class="main__itemsArea">
          <div class="main__item">
            <img src="@/assets/images/helloBanner/icon-random.svg" alt="" />
            <h1>Случайное место</h1>
            <p>Постоянно исследуйте новые улицы, парки, районы, площади...</p>
            <button
              class="main__learnMore"
              @click="$router.push('/main/random')"
            >
              Подробнее
            </button>
          </div>
          <div class="main__item">
            <img src="@/assets/images/helloBanner/icon-info.svg" alt="" />
            <h1>Информация</h1>
            <p>
              Читайте интересные факты истории и узнавайте современные точки
              притяжения
            </p>
            <button class="main__learnMore" @click="$router.push('/main/info')">
              Подробнее
            </button>
          </div>
          <div class="main__item">
            <img src="@/assets/images/helloBanner/icon-list.svg" alt="" />
            <h1>Список мест</h1>
            <p>
              Сохраняйте места, в которых вы побывали, а также составляйте
              список желаний для ближайших прогулок
            </p>
            <button
              class="main__learnMore"
              @click="$router.push('/main/places')"
            >
              Подробнее
            </button>
          </div>
        </div>
        <article class="main__article">
          <span style="font-weight: bold; color: #46865c; font-size: 30px"
            >Иди!</span
          >
          - это сервис для тех, кто много гуляет. Или хотел бы много гулять.
          <br /><br />

          Я часто сталкивался с проблемой, что люди, живущие всю жизнь в Москве,
          совершенно не знают свой город. Слова вроде “Крутицкое подворье” или
          “Хохловка” часто вызывают недоумение, а диапазон прогулок
          ограничивается Новым Арбатом и Тверской.
          <br /><br />

          Для туристов или ребят, только что переехавших из других городов,
          Москва вообще кажется большим клубком из дорог, подземных переходов и
          серых пятиэтажек.
          <br /><br />
          Мне бы очень хотелось изменить такой порядок вещей и рассказать, в
          каком чудесном, разнообразном и потрясающем городе мы живем.
          <br /><br />
          Основная идея проекта такая: сервис выбирает для вас какое-нибудь
          место из составленного мной списка, рассказывает о его истории, что
          там интересного и как туда добраться. После посещения вы сохраняете
          его себе в “Коллекцию”.
          <br /><br />
          Попробуем?)
        </article>
        <GoComponent @click="$router.push('/auth')">ИДИ!</GoComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import GoComponent from "../../ui/GoButton"

</script>

<style lang="scss" scoped>
.main {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: 0.1s;
  }

  &__title {
    font-family: "Roboto Light", sans-serif;
    font-size: 60px;
    font-weight: lighter;
    text-align: center;
    max-width: 800px;
    color: #292626;
    margin: 100px 0;
  }

  &__subtitle {
    font-family: "Roboto Light", sans-serif;
    font-size: 35px;
    font-weight: lighter;
    text-align: center;
    max-width: 700px;
    margin-bottom: 50px;
  }

  &__register {
    padding: 15px 40px;
    font-family: "Roboto Light", sans-serif;
    font-size: 25px;
    background-color: var(--primary-bg);
    border: none;
    color: var(--primary-text);
    cursor: pointer;
  }

  &__register:hover {
    opacity: 0.8;
    transition: 0.1s;
  }

  &__login {
    color: var(--text-color);
    font-family: "Roboto Light", sans-serif;
    text-decoration: underline;
    cursor: pointer;
    font-size: 20px;
    padding: 20px;
  }

  &__banner {
    margin-top: 100px;
  }

  &__itemsTitle {
    font-family: "Roboto Regular", sans-serif;
    color: #36463b;
    font-size: 40px;
    text-align: center;
    max-width: 700px;
    margin-bottom: 50px;
  }

  &__itemsArea {
    display: flex;
  }

  &__item {
    width: 330px;
    height: 550px;
    border-radius: 5px;
    margin: 30px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }

    img {
      height: 150px;
      margin: 50px 0;
    }

    h1 {
      font-family: "Roboto Regular", sans-serif;
      text-align: center;
      font-size: 30px;
      color: #484848;
      max-width: 220px;
      height: 100px;
      font-weight: lighter;
    }

    p {
      font-family: "Roboto Regular", sans-serif;
      font-size: 18px;
      text-align: center;
      max-width: 230px;
      color: #7a7a7a;
    }

    button {
      border: none;
      background: none;
      justify-self: flex-end;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      padding: 15px;
      font-family: "Roboto Light", sans-serif;
      font-size: 18px;
      color: #46865c;
      cursor: pointer;
      transition: 0.3s;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    }

    button:hover {
      background-color: #46865c;
      border-top: 1px solid #46865c;
      color: #fefefe;
      transition: 0.3s;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &__article {
    line-height: 135%;
    font-family: "Roboto Regular", sans-serif;
    font-size: 25px;
    width: 900px;
    margin: 100px 0 20px 0;
    color: #6c6c6c;
  }

  &__go {
    width: 300px;
    animation: go 4s infinite linear;
  }

  &__go_reverse {
    transform: rotate(180deg);
    animation: go 5s infinite reverse linear 2s;
  }

  &__go_three {
    animation: go 7s infinite linear 1s;
  }

  &__gobtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
    height: 400px;
    position: relative;
    margin-top: 50px;

    * {
      position: absolute;
    }

    h1 {
      z-index: 1000;
      font-family: "Roboto Light", sans-serif;
      font-weight: lighter;
      color: #e1e1e1;
      font-size: 70px;
      margin-top: 100px;
    }

    &:hover {
      transform: scale(1.02);
      transition: 0.4s;
    }
  }
}

@keyframes go {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
