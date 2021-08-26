$(function () {
    var tabela = '<header><div class="container"><h1 class="titulo">Impacta Notas</h1></div></header><main><section class="container"><h2 id="h2">Minhas notas</h2><table class="tabela"></table></section></main>';
    $('body').append(tabela);

    var thead = '<thead><tr style="background-color: #A9A9A9;"><th>Ac1</th><th>Ac2</th><th>Ac3</th><th>Ac4</th><th>Media</th></tr></thead>';
    $('table').append(thead);

    var tbody = '<tbody id="tabela-pacientes><tr class="paciente" id="primeira-nota"><td class="info-ac1"></td><td class="info-ac2"></td><td class="info-ac3"></td><td class="info-ac4"></td><td class="info-media"></td></tr></tbody>';
    $('table').append(tbody);

    var section = '<section class="container"><h2 id="titulo-form">Adicionar Notas</h2><ul id="mensagens-erro"></ul><form id="form-adiciona"></form></section>';
    $('body').append(section);

    var div = '<div class="grupo"><label for="nota1">Atividade Continua 1</label><input id=atividade1 name="nota1" type="number" placeholder="Digite a nota da Ac1" class="campo"></div><div class="grupo"><label for="nota2">Atividade Continua 2</label><input id=atividade2 name="nota2" type="number" placeholder="Digite a nota da Ac2" class="campo"></div><div class="grupo"><label for="nota3">Atividade Continua 3</label><input id=atividade3 name="nota3" type="number" placeholder="Digite a nota da Ac3" class="campo"></div><div class="grupo"><label for="nota4">Atividade Continua 4</label><input id=atividade4 name="nota4" type="number" placeholder="Digite a nota da Ac4" class="campo"></div>';
    $('form').append(div);

    var button = '<div style="margin: 10px;"> <button id="adicionar-paciente" class="botao bto-principal">Adicionar</button> </div>';
    $('form').append(button);

    $('button').click(function (event) {
        event.preventDefault();
        var ac1_inserir = parseInt($('#atividade1').val());
        var ac2_inserir = parseInt($('#atividade2').val());
        var ac3_inserir = parseInt($('#atividade3').val());
        var ac4_inserir = parseInt($('#atividade4').val());
        var media = ((ac1_inserir + ac2_inserir + ac3_inserir + ac4_inserir) / 4) * 0.3;
        var novaLinha = '<tr class="paciente" id="primeira-nota"> <td class="info-ac1">' + ac1_inserir + '</td> <td class="info-ac2">' + ac2_inserir + '</td> <td class="info-ac3">' + ac3_inserir + '</td> <td class="info-ac4">' + ac4_inserir + '</td> <td class="info-media">' + media.toFixed(2) + '</td> </tr>';
        $('tbody').append(novaLinha);
        var ac1_inserir = $('#atividade1').val("");
        var ac2_inserir = $('#atividade2').val("");
        var ac3_inserir = $('#atividade3').val("");
        var ac4_inserir = $('#atividade4').val("");
    });

    $('table').dblclick(function (event) {
        if (event.target.tagName == 'td');
        event.target.parentNode.remove();
    });
});

