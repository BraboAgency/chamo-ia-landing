# Chamo IA - Landing Page

Landing page para Chamo IA: Acompañamiento emocional para personas afectadas por los terremotos en Venezuela.

## Descripción

Esta es una landing page estática que dirige a usuarios al GPT de ChatGPT "Chamo IA". Incluye:

- Información clara sobre el servicio
- Disclaimer y términos legales
- Recursos de emergencia en Venezuela
- Tracking con Google Analytics
- Diseño responsive y accesible

## Estructura

```
chamo-ia-landing/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # Funcionalidad JavaScript
├── package.json        # Metadatos del proyecto
├── vercel.json         # Configuración de Vercel
├── .gitignore          # Archivos a ignorar en Git
└── README.md           # Este archivo
```

## Deployment en Vercel

### Opción 1: Desde CLI (Recomendado)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Desde la carpeta del proyecto, ejecuta:
```bash
vercel
```

3. Sigue las instrucciones:
   - Conecta tu cuenta de Vercel
   - Selecciona "Chamo IA Landing" como nombre del proyecto
   - Confirma la configuración

4. Tu sitio estará disponible en una URL como: `https://chamo-ia-landing.vercel.app`

### Opción 2: Desde GitHub

1. Sube este proyecto a un repositorio de GitHub
2. Ve a https://vercel.com
3. Haz clic en "New Project"
4. Importa el repositorio de GitHub
5. Vercel detectará automáticamente la configuración
6. Haz clic en "Deploy"

## Configuración Requerida

### 1. Google Analytics

Antes de lanzar, reemplaza `GOOGLE_ANALYTICS_ID` en `index.html`:

```html
<!-- Línea 10 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

Pasos:
1. Ve a https://analytics.google.com
2. Crea una nueva propiedad para "Chamo IA"
3. Copia tu ID de medición (empieza con G-)
4. Reemplaza `GOOGLE_ANALYTICS_ID` en dos lugares del archivo

### 2. ChatGPT GPT ID

Reemplaza `CHATGPT_GPT_ID` en `script.js`:

```javascript
// Línea 12
const chamoURL = 'https://chatgpt.com/g/g-XXXXXXXXXX';
```

Pasos:
1. Crea el GPT en ChatGPT (https://chatgpt.com/gpts/editor)
2. Usa el prompt de `prompt_alexis_venezuela.md`
3. Una vez creado, copia el ID de la URL
4. Reemplaza `CHATGPT_GPT_ID` en `script.js`

### 3. Email de Contacto

El email `informacion@brabo.agency` ya está configurado en:
- `index.html` (footer)
- `documentos_legales_venezuela.md`

Si necesitas cambiar, busca y reemplaza en `index.html`.

## Desarrollo Local

Para probar localmente:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (si tienes http-server instalado)
npx http-server

# Opción 3: Usa cualquier servidor web local
```

Luego abre: http://localhost:8000

## Tracking en Google Analytics

El sitio trackea automáticamente:

- **Clics en "Iniciar chat"**: `click_chamo_ia`
- **Visualización de Términos**: `view_terminos`
- **Visualización de Privacidad**: `view_privacidad`
- **Scroll Depth**: Cuando el usuario scrollea más del 50%
- **Tiempo en página**: Se registra al salir

## Dominio Personalizado

Para usar un dominio personalizado (ej: `chamo-ia.braboagency.com`):

1. En Vercel, ve a Project Settings > Domains
2. Agrega tu dominio
3. Sigue las instrucciones para configurar DNS
4. Vercel te guiará a través del proceso

## Seguridad y Privacidad

- **No almacenamos datos personales** (excepto analytics anónimo)
- **OpenAI controla los datos de las conversaciones**, no nosotros
- **Política de Privacidad clara** en la página
- **Disclaimer prominente** sobre limitaciones del servicio

## Soporte

Para preguntas o cambios:
- Contacta: josue@brabo.agency
- Información general: informacion@brabo.agency

## Licencia

MIT

---

**Última actualización**: Junio 2026
**Versión**: 1.0.0
