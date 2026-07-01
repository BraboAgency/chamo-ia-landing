# Configuración de Google Analytics para Chamo IA

## Paso 1: Crear Propiedad en Google Analytics

1. Ve a https://analytics.google.com
2. Haz clic en "Crear propiedad"
3. Nombre: "Chamo IA Landing"
4. Zona horaria: America/Caracas (Venezuela)
5. Moneda: USD (o VES si prefieres)
6. Haz clic en "Crear"

## Paso 2: Obtener tu ID de Medición

1. En la sección "Administración", ve a "Fuentes de datos" > "Web"
2. Copia tu **ID de medición** (empieza con G-)
3. Ejemplo: `G-A1B2C3D4E5`

## Paso 3: Actualizar el Código

Abre `index.html` y reemplaza `GOOGLE_ANALYTICS_ID` en DOS lugares:

### Lugar 1: Línea 10-15 (Script de GA)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-A1B2C3D4E5"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-A1B2C3D4E5');
</script>
```

### Lugar 2: vercel.json (Línea 10)
```json
"env": {
    "GOOGLE_ANALYTICS_ID": "G-A1B2C3D4E5"
}
```

## Paso 4: Verificar que Funciona

1. Despliega el sitio en Vercel
2. Abre el sitio en tu navegador
3. Ve a Google Analytics > Tiempo real
4. Deberías ver tu sesión activa
5. Haz clic en el botón "Iniciar chat con Chamo IA"
6. En Analytics, deberías ver el evento `click_chamo_ia`

## Eventos Que Se Trackean

| Evento | Descripción | Cuándo se registra |
|--------|-------------|-------------------|
| `click_chamo_ia` | Clic en botón principal | Usuario hace clic en "Iniciar chat" |
| `view_terminos` | Visualización de T&C | Usuario abre modal de términos |
| `view_privacidad` | Visualización de privacidad | Usuario abre modal de privacidad |
| `scroll_depth` | Profundidad de scroll | Usuario scrollea más del 50% |
| `page_time` | Tiempo en página | Usuario abandona la página |

## Dashboard Recomendado

Para monitorear el lanzamiento, crea un dashboard con:

1. **Usuarios activos (tiempo real)**
2. **Eventos por día** (especialmente `click_chamo_ia`)
3. **Tasa de clics** (clics / sesiones)
4. **Tiempo promedio en página**
5. **Dispositivos** (móvil vs desktop)
6. **Ubicación** (para ver si llega a Venezuela)

## Preguntas Frecuentes

**¿Cuánto tarda en aparecer el tráfico en Analytics?**
- Tiempo real: 1-2 minutos
- Reportes completos: 24-48 horas

**¿Puedo ver datos de hoy?**
- Sí, en "Tiempo real" ves datos instantáneos
- Los reportes estándar se actualizan cada 24 horas

**¿Cómo sé cuántas personas hicieron clic?**
- Ve a Reportes > Eventos > `click_chamo_ia`
- Verás el número total de clics

**¿Puedo trackear más cosas?**
- Sí, modifica `script.js` para agregar más eventos
- Ejemplo: trackear cuánto tiempo pasa en cada sección

## Troubleshooting

**No veo datos en Analytics:**
1. Verifica que el ID esté correcto (empieza con G-)
2. Espera 5-10 minutos (tiempo real puede tardar)
3. Abre el sitio en una ventana privada/incógnita
4. Revisa la consola del navegador (F12) para errores

**Los eventos no se registran:**
1. Verifica que `gtag` esté definido en `script.js`
2. Abre la consola (F12) y ejecuta: `gtag('event', 'test')`
3. Debería aparecer en Analytics > Tiempo real

## Próximos Pasos

Una vez que tengas datos:
1. Analiza qué canales traen más tráfico
2. Identifica dónde salen los usuarios
3. Optimiza el copy/diseño basado en datos
4. Prepara un reporte para buscar patrocinio
