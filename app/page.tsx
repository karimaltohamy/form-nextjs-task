import Header from "@/components/header/Header.component";
import MyInformationForm from "@/components/myInformationForm/MyInformationForm.component";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* my information form */}
      <MyInformationForm />
    </div>
  );
}
