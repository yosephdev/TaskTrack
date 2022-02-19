# Att-göra-applikation
 
 ![Preview](/att-gora-app.png)

## Deluppgift 1: Struktur
### Skapa strukturen för “Att göra”-applikationen. 

#### Nedanför följer en kravlista på minimumkrav för strukturen:

#### Komponenterna som skapar nya sysslor, ska bestå av
#### Ett fält där användaren kan skriva in beskrivning av sysslan
#### En knapp för att lägga till ny syssla
## ”Att göra”-listan, ska bestå av
#### Flera sysslor (om användaren har lagt till en syssla, annars tom)
#### Förutom beskrivningen av sysslan, ska det även finnas knappar kopplade till sysslan för att
#### Ändra innehållet
#### Markera sysslan som klar
#### Radera syssla
## ”Färdiga”-listan, en lista för färdiga sysslor ska bestå av
#### Flera sysslor (om användaren har markerat någon syssla som klar annars tom)
#### Förutom beskrivningen av sysslan, ska det även finnas knappar kopplade till sysslan för att
#### Ändra innehållet
#### Radera syssla

## Deluppgift 2: Interaktion

### Implementera lämplig funktionalitet i “Att göra”-applikationen med hjälp av JavaScript. 
### Utgå från följande scenarion

## Scenario 1 (Lägga till)
#### Användaren skriver in sysslan ex. ”handla mat”
#### Användaren klickar på knappen för att lägga till
#### Sysslan läggs till ”Att göra”-listan

## Scenario 2 (Redigera syssla) // Feedback från läraren: en ändrad syssla skall åter kunna låsas //
#### Sysslans text är låst som default, dvs texten går inte att redigera
#### Användaren klickar på ‘Ändra’- knappen för att redigera en tillagd syssla
#### Sysslan går nu att redigera
#### Användaren redigerar sysslan
#### Användaren klickar igen på samma knapp för att spara texten.
#### Sysslans textfält blir låst, och går ej att redigera.
#### Man skall kunna repetera denna process flera gånger om.

## Scenario 3 (Radera syssla)
#### Användaren klickar på ‘radera’-knappen, som tar bort sysslan från listan

## Scenario 4 (Markera syssla som klar)
#### Användare klickar på knappen för att markera syssla som klar
#### Sysslan flyttas från ”Att göra”-listan till en ”Färdiga”-listan
#### Sysslan finns inte längre i ”Att göra”-listan
## Scenario 5 (Ändra/Radera färdiga sysslor)
#### Användaren kan fortfarande ändra och radera sysslor i ‘Färdiga’-listan

