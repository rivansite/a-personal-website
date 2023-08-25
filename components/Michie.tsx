export default function Michie() {
  fetch("https://jkt48-showroom-api.vercel.app/api/rooms/trainee")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
    });
  return (
    <div className="w-full h-screen">
      <h1></h1>
    </div>
  );
}
