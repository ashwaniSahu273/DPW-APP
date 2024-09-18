import React from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
const pClass = "my-5";

export default () => {
  return (
    <>
      <Header></Header>
      <div className="bg-white-500 w-full px-4 md:px-80 text-black font-thin md:py-10 py-4">
        <section>
          <div className="text-2xl my-5 font-semibold">
            Как пользоваться @dogecoin_chain_bot ?
          </div>
          <div>
            Открой{" "}
            <strong>
              <a href="https://t.me/dogecoin_chain_bot">@dogecoin_chain_bot</a>
            </strong>
            .
            <div>
              Нажми на кнопку Start, регистрируйтесь. Просто следуйте
              инструкциям.
            </div>
            <p className={pClass}>
              Если нужна помощь, свяжитесь с оператором:{" "}
              <a href="https://t.me/dogecoin_blockchain">
                https://t.me/dogecoin_blockchain
              </a>
              .
            </p>
            <p className={pClass}>
              Пришлите свой email роботу. На этот email будет приходить
              код-двухфакторной аутентификации. Так безопасней осуществлять
              переводы.
            </p>
          </div>
        </section>

        <section>
          <div className="text-2xl my-5 font-semibold">Доступные команды</div>
          <p className={pClass}>
            <strong>/balance </strong>- показывает твой уникальный адрес в
            блокчейне и сколько Dogecoin на нём есть. На него можно прислать
            деньги.
          </p>

          <p className={pClass}>
            <strong>/buy </strong> - запускает процесс покупки Dogecoin.
            <ul>На сегодняшний день мы поддерживаем YooMoney.</ul>
            <li className="ml-6">
              Пришли роботу адрес кошелька с которого будешь делать перевод.{" "}
            </li>
            <li className="ml-6">
              Робот сообщит вам номер кошелька на который он ожидает зачисление.{" "}
            </li>
            <li className="ml-6">
              Откройте свой YooMoney кошелёк. Выбери там 'Переводы', 'На баланс
              кошелька' и введи номер который дал вам робот - 410012387908910.
              Суммы до 40 тысяч RUB обрабатываются автоматически;
            </li>
          </p>

          <p className={pClass}>
            Если вам нужно перевести крупную сумму, свяжитесь с оператором
            или напишите{" "}
            <strong>
              {" "}
              <a href="mailto:team@dogej.org"> team@dogej.org</a>
            </strong>
            . Вашу операцию обработаем вручную.
          </p>

          <ol className={pClass}>
            <strong>/send </strong>- запускает процесс перевода на другой
            Dogecoin адрес. <strong>Dogecoin</strong> - глобальная сеть, поэтому
            переводить можно на адрес, в любой стране мира, без ограничений. С{" "}
            <strong>
              {" "}
              <a href="https://t.me/dogecoin_chain_bot">
                @dogecoin_chain_bot
              </a>{" "}
            </strong>{" "}
            вы можете переводить тремя способами:
            <li className="ml-6 ">
              <strong>1)</strong> Прямо на адрес.
            </li>
            <li className="ml-6 py-5">
              <strong>2)</strong> Можно переводить контакту Telegram. Для этого
              нажмите на скрепку внизу экрана. Выберите Contact из списка.
              Минимальная сумма перевода - 1 Dogecoin.
              <div>
                NB: Получатель должен зарегистрироваться в @dogecoin_chain_bot,
                также как вы сделали это на первом шаге.{" "}
              </div>
              <img src="/assets/img/paperclip.png" className="h-70 w-512" />
              <img src="/assets/img/contact1.png" className="h-70 w-512" />
            </li>
            <li className="ml-6 py-5">
              <strong>3) </strong>Инлайн командой. Для этого, в любом окне чата
              введите:
              <p className={pClass}>
                <strong>@dogecoin_chain_bot recipient-nickName 1 Doge</strong>
              </p>
              <div>
                Где <strong>@dogecoin_chain_bot</strong> - имя нашего робота.{" "}
                <strong>recipient-nickName</strong> - никнейм получателя в
                Telegram. <strong>1</strong> - сумма может быть любым числом
                больше 1. <strong>Doge</strong> - наименование актива. И нажмите
                на всплывшее окно.
              </div>
              <img src="/assets/img/inline.png" className="h-70 w-512 py-5" />
            </li>
          </ol>
          <p className={pClass}>
            <strong>Теперь пробуйте самостоятельно! </strong>
          </p>
        </section>
      </div>

      <Footer className="bg-blue-500" textColor="white" />
    </>
  );
};
