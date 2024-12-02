import PageTitle from "@/components/PageTitle";
import { Users } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChar from "@/components/BarChar";
import RegistrationCard, { RegProps } from "@/components/RegistrationCard";

const cardData: CardProps[] = [
  {
    label: "Total user",
    amount: "2500",
    description: "all from the last week",
    icon: Users
  },
  {
    label: "Total user",
    amount: "2500",
    description: "all from the last week",
    icon: Users
  },
  {
    label: "Total user",
    amount: "2500",
    description: "all from the last week",
    icon: Users
  },
  {
    label: "Total user",
    amount: "2500",
    description: "all from the last week",
    icon: Users
  }
]

const userRegData: RegProps[] = [
  {
    name: "kevin",
    email: "kevin@mail.com",
    regAmount: "25",
  },
  {
    name: "franck",
    email: "franck@mail.com",
    regAmount: "40",
  },
  {
    name: "franck",
    email: "franck@mail.com",
    regAmount: "40",
  },
  {
    name: "franck",
    email: "franck@mail.com",
    regAmount: "40",
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d,i) =>(
          <Card key={i}
            amount={d.amount}
            label={d.label}
            icon={d.icon}
            description={d.description}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChar/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <p>Recent registration</p>
          <p className="text-sm text-gray-500">
            You made 40 registration
          </p>
          {userRegData.map((data, index) =>(
            <RegistrationCard 
              key={index} 
              name={data.name}
              email={data.email}
              profile={data.profile}
              regAmount={data.regAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
