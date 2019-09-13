### ToDo

- [x] sotto-component che passa le props invece della funzione
- [-] implementare merge (es. props, class, events)
- [_] passare hidden nelle props (o al massimo class-d-none)
- [_] usare mixins/helpers per eventHandler, :focus, transizioni, scrolling e simili
- [ ] events multicanale (array di channel/payload) / merge eventi
- [ ] threeshaking a-la-carte
- [ ] events receiver per il component
- [ ] passare al component i dati già overridati

- [ ] ricordarsi del globals per il tema ecc
- [ ] Testare history mode per router
- [ ] Spinner loader globale
- [ ] Spinner loader come primo component, che poi carica home?
- [ ] vue.config, app.config, babel ecc
- [ ] Il component usa v-slot per generare NavLink validato (user eccc)
- [ ] Importare il color-pack vuetify
- [ ] Creare testing-units e inserire Sentry
- [ ] Internazionalizzazione

### Done

- [x] Installa vuetify
- [x] Integra vuetify e router
- [x] Menu compatibile mobile
- [x] Menu icons
- [x] Drawer con toggle
- [x] Drawer e navbar come componenti
- [x] Drawer e navbar con $emit
- [x] Drawer e navbar con unica base dati
- [x] Drawer e navbar con voci diverse in stesso array
- [x] Drawer e navbar con Event Handler generico ed $emit
- [x] Rimuovi :focus dai bottoni
- [x] Ereditarietà props diretta (da oggetto)
- [x] Separare le prop per component (es. hidden)
- [x] Ereditarietà + Override delle prop e degli eventi
- [x] eventBus in ottica di framework + testing
- [x] component generico "Element" con "component-is"
- [x] components CamelCase
- [x] uniformare navbar e drawer (es. options, getProps ecc)