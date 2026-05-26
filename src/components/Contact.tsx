export default function Contact() {
  return (
    <section id="聯絡我們" className="py-24 max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif text-brand-wood mb-8">聯絡我們</h2>
        <div className="space-y-4 text-brand-coffee">
          <p>地址：<a href="https://www.google.com/maps/search/?api=1&query=台北市中正區三元街176號1樓" target="_blank" rel="noopener noreferrer" className="text-brand-wood underline hover:text-brand-coffee">台北市中正區三元街176號1樓</a></p>
          <p>電話：02-2521-5361</p>
          <div>
            <p className="font-bold">營業時間：</p>
            <p>週一～週四：12:00–21:00</p>
            <p>週五～週日：12:00–23:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
