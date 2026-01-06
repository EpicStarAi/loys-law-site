import { useServices } from "@/hooks/use-legal-data";
import { ServiceCard } from "@/components/ServiceCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen bg-muted/10">
      <div className="bg-primary text-white py-20">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Наші послуги</h1>
          <p className="text-white/60 max-w-2xl text-lg">
            Ми надаємо повний спектр юридичних послуг з акцентом на результат. 
            Оберіть напрямок практики, що відповідає вашим потребам.
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-[300px] w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
