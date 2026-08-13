#include <iostream> // Permite usar cout y cin para entrada y salida estándar
#include <vector>   // Permite usar el contenedor vector (arreglo dinámico)
#include <cstdlib>  // Proporciona funciones como rand() y srand() para números aleatorios
#include <ctime>    // Proporciona funciones relacionadas con el tiempo, como time()

using namespace std; // Evita tener que escribir std:: delante de cout, vector, etc.

// Estructura que representa un bloque de espacio en disco
struct Bloque
{
    int inicio;   // Dirección de inicio del bloque en el disco
    int tamano;   // Tamaño del bloque (cantidad de unidades)
    bool ocupado; // Indica si el bloque está ocupado (true) o libre (false)

    // Constructor que inicializa el bloque con su posición de inicio y tamaño,
    // y lo marca como libre (ocupado = false)
    Bloque(int ini, int tam) : inicio(ini), tamano(tam), ocupado(false) {}
};

// Estructura que representa un archivo que se almacenará en el disco
struct Archivo
{
    int id;     // Identificador único del archivo
    int tamano; // Tamaño del archivo (en unidades de espacio)

    // Constructor que inicializa el archivo con un ID y un tamaño
    Archivo(int i, int t) : id(i), tamano(t) {}
};

// Clase que se encarga de administrar el espacio en disco
class AdministradorDisco
{
private:
    vector<Bloque> espacioDisponible; // Lista de bloques disponibles o asignados en el disco

public:
    // Constructor que recibe el tamaño total del disco y crea un único bloque libre
    AdministradorDisco(int tamanoTotal)
    {
        espacioDisponible.emplace_back(0, tamanoTotal); // Crea un bloque que va desde 0 hasta el tamaño total
    }
};
