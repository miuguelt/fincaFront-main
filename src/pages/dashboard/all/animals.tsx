import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth/useAuth";
import { ClimbingBoxLoader } from "react-spinners";

//Types
import { useAnimals } from "@/hooks/animal/useAnimals";

const AnimalList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const { animals, loading, error } = useAnimals();
  const { role } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClimbingBoxLoader color="#2563EB" size={30} />
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  const filteredAnimals = animals.filter((animal) =>
    animal.record.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (animal: any) => {
    const rolePaths: { [key: string]: string } = {
      Administrador: "/admin/animalCreate",
      Instructor: "/instructor/animalCreate",
      Aprendiz: "/apprentice/animalCreate",
    };
    const path = role ? rolePaths[role] : null;
    if (path) {
      navigate(path, {
        state: {
          isEdit: true,
          animal,
        },
      });
    }
  };

  const handleChangeLink = () => {
    const rolePaths: { [key: string]: string } = {
      Administrador: "/admin/animalCreate",
      Instructor: "/instructor/animalCreate",
      Aprendiz: "/apprentice/animalCreate",
    };
    const path = role ? rolePaths[role] : null;
    if (path) {
      navigate(path);
    }
  };


  return (
    <div className="container mx-auto p-6 ">
      <div className="flex flex-row justify-between items-center mb-11">
        <h1 className="text-2xl font-bold">Lista de Animales</h1>
        <div className="flex justify-center items-center gap-6">
          <Button
            variant="ghost"
            className="h-8 bg-black text-white hover:bg-gray-900 hover:text-white"
            onClick={handleChangeLink}
          >
            Agregar animal
          </Button>
          <Input
            className="w-72"
            placeholder="Buscar por registro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAnimals.map((animal) => (
          <Card key={animal.record}>
            <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
              <CardTitle className="text-sm font-medium">
                {animal.record}
              </CardTitle>
              <Badge
                variant={
                  animal.status === "Vivo"
                    ? "vivo"
                    : animal.status === "Muerto"
                    ? "destructive"
                    : "secondary"
                }
              >
                {animal.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">
                    Nacimiento:{" "}
                  </span>
                  {animal.birth_date}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Sexo: </span>
                  {animal.sex}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Peso: </span>
                  {animal.weight}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Padre: </span>
                  {animal.father?.record || "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Madre: </span>
                  {animal.mother?.record || "N/A"}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Raza: </span>
                  {animal.breed?.name}
                </p>
              </div>
              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-2 w-8 p-0">
                      <span className="sr-only">Abrir menú</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    <DropdownMenuItem
                      onClick={() => handleEdit(animal)}
                      className="hover:cursor-pointer"
                    >
                      Editar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
