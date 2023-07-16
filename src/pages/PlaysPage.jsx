import HeroCarousel from "../components/Hero-Carousel/HeroCarousel";
import Poster from "../components/Poster/Poster";
import PlaysFilter from "../components/Plays-Filters/PlaysFilter";

const Plays = () => {
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-2">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="font-bold text-xl my-3">Events in Chennai</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-fqyjvwwejs-portrait.jpg"
                  title="AR Rahman Live Concert"
                  subtite="Adityaram Palace"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-fqyjvwwejs-portrait.jpg"
                  title="AR Rahman Live Concert"
                  subtite="Adityaram Palace"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361122-fqyjvwwejs-portrait.jpg"
                  title="AR Rahman Live Concert"
                  subtite="Adityaram Palace"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12">
            <h2 className="font-bold text-xl my-3">Filter</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This weekend"]}
              />
              <PlaysFilter title="Language" tags={["English", "Tamil"]} />
              <PlaysFilter
                title="Categories"
                tags={["Theatre", "Story telling"]}
              />
              <PlaysFilter
                title="Genres"
                tags={["Drama", "Adaptation", "Comedy", "Classic"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
