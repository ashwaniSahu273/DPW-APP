import React from "react";

import Footer from "../layout/footer";

const pClass = "my-5";

export default () => {
  return (
    <>
      <div className="bg-white font-thin">
        <div className="h-10 mx-4 md:mx-24 mt-5">
          <img src="/assets/SVG/logo.svg" className="h-10 w-10 inline" />
          <span className="font-bold text-gray-800"> </span>
          <div className="float-right">
            <a
              href="https://t.me/dogecoin_chain_bot"
              className="bg-blue-500 text-white py-2 px-4 rounded rounded-full hover:bg-blue-600 text-sm"
            >
              Начать использовать
            </a>
          </div>
        </div>
        
        <div className="mx-5 md:mx-80 text-center">
          <div className=" mt-10">
            <p className="text-3xl md:text-4xl mb-3">
              <span className="text-blue-500">Мгновенные прямые переводы </span>
              между пользователями Telegram
            </p>
            <p className="font-light mt-2 text-sm text-gray-700">
              @dogecoin_chain_bot - система мгновенных трансграничных переводов
              между пользователями Telegram.
            </p>
            <br />
            <br />
            <a
              href="https://t.me/dogecoin_chain_bot"
              className="bg-blue-500 py-3 px-5 text-white hover:bg-blue-600 rounded-full"
            >
              Начать использовать
            </a>
            <br />
            <br />
            <p className="text-gray-600 my-10 text-sm">
              Связаться с нами:{" "}
              <a
                href="mailto:team@dogej.org"
                className="text-blue-500 hover:text-blue-600"
              >
                team@dogej.org
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 w-full px-4 md:px-80 text-white font-thin md:py-10 py-4">
        <section>
          <div className="text-2xl font-thin my-5 font-semibold">
            Зачем это нужно?
          </div>

          <p className={pClass}>
            Деньги есть товар, выполняющий роль всеобщего эквивалента.
          </p>

          <div>
            Купить товар, продать товар, перевести деньги, получить деньги,
            вывести деньги за границу. Совершить сделку не так легко, особенно
            когда получатель за границей.
          </div>

          <p className={pClass}>
            Мы создали решение, которое помогает осуществлять международные
            переводы без блокировок и границ.
          </p>
        </section>

        <section>
          <div className="text-2xl my-5 font-semibold">Как это работает?</div>
          <div>
            <p className={pClass}>
              <strong>Dogecoin</strong> — это электронная платёжная система с
              открытым исходным кодом. <strong>Block-chain Dogecoin</strong> - одноранговая сеть.
              Одноранговая означает что нет иерархии, операции происходят
              напрямую между двумя адресами, P2P. Между вами и вашим
              сбережениями нет посредников.
            </p>

            <p className={pClass}>
              Электронная обозначает - вы можете осуществлять безналичные
              платежи, также как делаете это кредитными картами. Можно получать,
              переводить, оплачивать. Разница в том, что в случае с банковскими
              счетами, ваши деньги храняться в банке. А в случае с Dogecoin{" "}
              <strong>
                - контроль доступа к вашим деньгам находится лично в ваших
                руках.
              </strong>
            </p>

            <p className="pClass">
              Dogecoin свободен, аналогия с Internet тут очень близка.
            </p>

            <p className={pClass}>
              <strong>Open Source</strong> означает что сеть Dogecoin не
              контролируется каким бы то ни было банком, иной организацией, или
              национальным правительством.
            </p>

            <p className={pClass}>
              Существует множество систем, однако Dogecoin - уникален. 99%
              существующих платежных систем разрабатываются коммерческими
              организациями. Например: МИР, Visa, MasterCard, иные альткоины -
              это продукты конкретных частных коммерческих организаций. Каждая
              такая организация находится в конкретной юрисдикции и подвержена
              регулированию, также как и все фиатные деньги.
            </p>

            <p className={pClass}>
              <strong><a href="https://t.me/dogecoin_chain_bot">
                  @dogecoin_chain_bot
                </a></strong> разработал возможность перевода
              в Telegram полуателю из списка ваших контактов напрямую. Это удобно и безопасно.
            </p>

            <p className={pClass}>
              Деньги приходят на адрес в сети Dogecoin. Перевод происходит через
              escrow счёт, таким образом гарантируется безопасность отправителя
              и получателя.
            </p>

            <p className={pClass}>
              Чтобы сделать перевод, просто начните использовать робота здесь:{" "}
              <strong>
                <a href="https://t.me/dogecoin_chain_bot">
                  @dogecoin_chain_bot
                </a>
              </strong>{" "}
            </p>
            <p className={pClass}>
              <br />
            </p>
            <p className={pClass}>
              Если вам нужна консультация, либо вы ищете способ интеграции вашей информационной системы с
              криптовалютой - свяжитесь с нами по адресу
              <strong>
                {" "}
                <a href="mailto:team@dogej.org"> team@dogej.org</a>
              </strong>
              , или напишите оператору{" "}
              <strong><a href="https://t.me/dogecoin_blockchain">
                https://t.me/dogecoin_blockchain
              </a></strong>
              .
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
