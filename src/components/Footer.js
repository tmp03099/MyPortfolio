function Footer() {
  return (
    <section className="flex justify-center items-center">
      <div className="border-4 outline-2 bg-gray-900 shadow-2xl rounded-3xl p-12 text-white text-center">
        <div>
          <h3 className="text-amber-300">Interested in working together?</h3>
          <h2>STAY CONNECTED</h2>
          <p>
            I'm currently looking for the opportunity to join a team of
            developer. If you think I might be a good fit, please contact me.
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative w-16 h-16 bg-orange-700 border-2 rounded-full"></div>
          <div className="relative -left-9 text-xl font-bold">
            <button>MY RESUME</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
