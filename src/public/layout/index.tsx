import React from "react";

const paragrapClass = "my-5";

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen flex-auto flex-shrink-0 antialiased bg-gradient-to-br from-blue-700 to-teal-400 font-extralight p-10">
      <div className="shadow h-full">
        {" "}
        <div className="grid grid-cols-2 content-box">
          <div className="bg-white"> {children}</div>

          <div className="bg-blue-600 text-white h-full px-10 py-20">
            <div className="grid grid-cols-3 mt-10">
              <img
                src="/assets/img/2785490_blockchain_dogecoin_icon128.png"
                className="inline"
              />
            </div>
            <div className="text-2xl col-span-2 uppercase tracking-wide mt-5">
            @Dogecoin_chain_bot - это программа для осуществления мгновенных прямых переводов между пользователями Telegram. 
            </div>
            <div
              className={`${paragrapClass} text-xl text-yellow-300 font-semibold`}
            >
              Зачем это нужно ?
            </div>

            <div className={paragrapClass}>
            Вы не можете просто купить новый товар заграницей, в современных реалиях. Банки отвергают трансграничные переводы, продавцы не могут принять оплату. Поставщики услуг не хотят проводить сделки. Находясь за границей вашей банковской карте может быть отказано в обслуживании, либо деньги заблокируют.
            </div>
            <div className={paragrapClass}>
              {" "}
              Решение есть. Jet-coin помогает избежать подобных проблем и подобных рисков. Ваш ключ - ваши деньги.
            </div>
            <div
              className={`${paragrapClass} text-xl text-yellow-300 font-semibold`}
            >
              Как работает технология:
            </div>

            <div className={paragrapClass}>
            Jet-coin создан на базе блокчейна Dogecoin. Dogecoin — это электронная платёжная система с открытым исходным кодом. Блокчейн Dogecoin - одноранговая сеть. Одноранговая означает что нет иерархии, операции происходят напрямую между двумя адресами сети, P2P. Между вами и вашим богатством нет посредников. 
            </div>

            <div className={paragrapClass}>
            Open Source означает что сеть Dogecoin не контролируется каким бы то ни было банком, иной организацией, или национальным правительством. Аналогия с Internet тут очень близка.
            </div>

            <div className={paragrapClass}>Существует другие платёжные системы, но ситуация с Dogecoin уникальна: 99% существующих платежных систем разрабатываются конкретными коммерческими организациями. Например: МИР, Visa, MasterCard, все другие альткоины - это продукты конкретных частных коммерческих организаций. Каждая такая организация находится в юрисдикции и подвержена регулированию, также как и все фиатные деньги. Все, кроме Dogecoin. </div>
          
            <div className={paragrapClass}>В случае с Jet-coin - регулированию подвержена наша организация, но не сеть. С помощью нашего приложения вы можете получать и переводить Dogecoin напрямую контакту из списка Telegram пользователей. Деньги приходят на адрес в сети Dogecoin. Перевод происходит через escrow счёт, таким образом гарантируется безопасность продавца и покупателя.</div>

            <div className={paragrapClass}>Чтобы сделать перевод, просто начните использовать робота здесь: <a
                href="https://t.me/jet_coin_bot"
                className="cursor-pointer hover:text-yellow-300"
              >
                https://t.me/jet_coin_bot
              </a>{" "}
            
             или введите @jet_coin_bot.</div>

            <div className={paragrapClass}>Попробуйте на маленькой сумме, но лимитов нет. </div>

            <div className={paragrapClass}>А если вы ищете интеграцию вашей информационной системы с Dogecoin, или вам нужна консультация - свяжитесь с нами по адресу team@jet-coin.space.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
