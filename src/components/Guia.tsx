// app/guia/page.tsx o /components/Guia.tsx
import Image from "next/image";
import "../styles/globals.css";

export default function Guia() {
  return (
    <main className="guia-container">
      {/* Paso 1 */}
      <section className="guia-section">
        <h2>1. Crear el Subdominio</h2>
        <p>
          Ve a la opción <strong>Dominios</strong> en el menú de SiteGround y crea un subdominio.
          <strong> Nota:</strong> solo un administrador puede realizar esta acción. Solo debes ingresar el nombre deseado; SiteGround completará la dirección automáticamente como se muestra en la imagen.
        </p>
        <Image
          src="/one.png"
          alt="Creación de subdominio en SiteGround"
          width={800}
          height={400}
        />
      </section>

      {/* Paso 2 */}
      <section className="guia-section">
        <h2>2. Acceder al File Manager</h2>
        <p>
          Dirígete al menú <strong>Site</strong> y selecciona la opción <strong>File Manager</strong>. Allí verás el subdominio que contiene una carpeta con el nombre <code>public_html</code>.
        </p>
        <Image
          src="/two.png"
          alt="Acceso al File Manager de SiteGround"
          width={800}
          height={400}
        />
      </section>

      {/* Paso 3 + 4 combinados */}
      <section className="guia-section">
        <h2>3. Descargar y Subir Nextcloud</h2>
        <p>
          Descarga Nextcloud en formato <code>.zip</code> desde su sitio web oficial. Este archivo será necesario para subirlo luego a SiteGround.
        </p>
        <Image
          src="/three.png"
          alt="Descarga de Nextcloud desde la página oficial"
          width={800}
          height={400}
        />
        <p>
          Luego, sube el archivo <code>.zip</code> dentro de la carpeta <code>public_html</code> del subdominio y extrae su contenido con las herramientas de SiteGround. 
          <strong> Importante:</strong> los archivos descomprimidos no deben quedar dentro de ninguna subcarpeta. De lo contrario, el subdominio cambiará su ruta (por ejemplo: <code>nextcloud.web.platform.pukara.dev</code> en lugar de <code>nextcloud.platform.pukara.dev</code>).
        </p>
      </section>

      {/* Paso 5 */}
      <section className="guia-section">
        <h2>4. Crear Base de Datos MySQL</h2>
        <p>
          Crea una base de datos en SiteGround. Esta tendrá un nombre tipo <strong>hash</strong> que no puede ser modificado. Luego, crea un usuario (también tipo hash), al que puedes asignar una etiqueta identificadora. Asocia este usuario a la base de datos.
        </p>
        <p>
          <strong>Importante:</strong> Ten a la mano el nombre de la base de datos, usuario y contraseña. Si el proceso es realizados con MySQL este proceso es un poco diferente.
        </p>
        <div className="seccion-5-imagenes">
          <Image
            src="/four.png"
            alt="Subida y extracción de Nextcloud"
            width={800}
            height={400}
          />
          <Image
            src="/five.png"
            alt="Creación de base de datos MySQL"
            width={800}
            height={400}
          />
        </div>
      </section>

      {/* Paso 6 */}
      <section className="guia-section">
        <h2>5. Configurar el Archivo config.sample.php</h2>
        <p>
          En el File Manager, entra a la carpeta <code>config</code> (anteriormente era un archivo). Busca el archivo <code>config.sample.php</code> y edítalo (puedes renombrarlo o mantener el nombre).
        </p>
        <p>
          Dentro del archivo, ubica los campos <code>dbname</code>, <code>dbuser</code> y <code>dbpassword</code>. Rellénalos con las credenciales de la base de datos que creaste. Al guardar los cambios, se generará un nuevo archivo llamado <code>config.php</code>, lo cual indica una conexión exitosa.
        </p>
        <Image
          src="/six.png"
          alt="Edición de config.php con credenciales"
          width={800}
          height={400}
        />
      </section>

      {/* Paso 7 */}
      <section className="guia-section">
        <h2>6. Acceder al Sitio</h2>
        <p>
          Una vez configurado todo correctamente, podrás acceder a tu instalación de Nextcloud desde el subdominio configurado. 
        </p>
      </section>
    </main>
  );
}
