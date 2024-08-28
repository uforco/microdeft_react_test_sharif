import Productcard from "./Productcard"

export default function page() {
  return (
    <div className=" mx-auto container grid grid-cols-3 gap-4 " >
      <Productcard></Productcard>
      <Productcard></Productcard>
      <Productcard></Productcard>
      <Productcard></Productcard>
      <Productcard></Productcard>
    </div>
  );
}
