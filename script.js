let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];

// Adicionando novo contato
contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
});

// Pegando primeiro e último contato
let primeiro = contacts[0];
let ultimo = contacts[contacts.length - 1];

// Função para formatar contato com quebra de linha
function formatarContato(contato) {
  return `${contato.name}\n${contato.phone}\n${contato.email}`;
}

// Inserindo no HTML
document.getElementById("contacts").innerHTML = `
  <div class="contact"><strong>Primeiro contato:</strong>\n${formatarContato(primeiro)}</div>
  <div class="contact"><strong>Último contato:</strong>\n${formatarContato(ultimo)}</div>
`;
