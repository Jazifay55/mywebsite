import "./header.css"

export default function header() {
  return <div className="header">
    <style>{'body { background-color: lavenderblush; }'}</style>
          <img
        className="headerImg"
        //src="src/assests/Fuck Yeah, Animal Crossing!.gif"//Add Gif later
        src="https://cdn140.picsart.com/299748378125201.png?to=crop&type=webp&r=1000x707&q=95&width=3840"
        alt="stars"
      />
      <div className="headerTitle">
          <span className="headerTitleBg">Jaz's Web</span>
          <span className="headerTitleSm">Jazmine Kibet's personal website</span>
      </div>
  </div>;
}
