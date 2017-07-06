$(function(){

  var stdout = {
    "log": function(string, c){
      var t = $("<span></span>");
      t.html(string + "<br>");
      $(".consoleoutput").append(t);
      if(c) t.css({"color": c});
      stdout.scrollTo($(".consoleoutput")[0].scrollHeight);
      return undefined;
    },
    "clear": function(){
      $(".consoleoutput").html("");
      return undefined;
    },
    "scrollTo": function(s){
      $(".consoleoutput").scrollTop(s);
      return s;
    }
  }

  $(".consoleinput").focus();
  $(".consoleinput").keydown(function(e) {
    if (event.which === 13){
      var args = $(".consoleinput").val().split(" ");
      var cmd = args[0].valueOf();
      if(cmd.length < 1) return;
      args.shift();
      $(".consoleinput").val("");

      if(cmd === "help"){
        stdout.log("Esta é uma página inicial.<br>");
        stdout.log("--- COMANDOS ---");
        stdout.log("help  - Retorna uma lista de comandos");
        stdout.log("clear - Limpa o terminal");
        stdout.log("projetos - Mostra todos os projetos realizados.");
        stdout.log("man - Manual do usuário");
        stdout.log("wyg - ???");
      } else if(cmd === "projetos"){

        if(args[0] === "listar"){
          stdout.log("usbtypec");
          stdout.log("embedcolorpicker");
          stdout.log("navvibrate");
        } else if(args[0] === "abrir"){
          if(args[1] === "usbtypec"){
            window.open("https://milesgitgud.github.io/usbtypec/", "_blank");
          } else if(args[1] === "embedcolorpicker"){
            window.open("https://milesgitgud.github.io/color/", "_blank");
          } else if(args[1] === "navvibrate"){
            window.open("https://milesgitgud.github.io/navigatorvibrate/", "_blank");
          }
        } else {
          stdout.log("Parâmetros inválidos. Execute 'man projetos' para ajuda.", "red")
        }

      } else if(cmd === "man"){
        if(args[0] === "projetos"){
          stdout.clear();
          stdout.log("USAGE: projetos [listar/abrir [projeto]]<br><br>Usado para mostrar os projetos já feitos");
        } else {
          stdout.log("Entrada não encontrada", "red")
        }
      } else if(cmd === "clear"){
        stdout.clear();
      } else if(cmd === "wyg"){
        $("body").append('<audio style="display: none" autoplay src="./ost/wyg.ogg"></audio>');
        $(".consoleinput").prop('disabled', true);
        stdout.clear();
        stdout.log("Forms FORM-29827281-12-2:");
        stdout.log("Notice of Dismissal");
        stdout.log("");
        stdout.log("");
        setTimeout(() => {
          stdout.log("Well here we are again.");
          setTimeout(() => {
            stdout.log("It's always such a pleasure.");
            setTimeout(() => {
              stdout.log("Remember when you tried to kill me twice?");
              setTimeout(() => {
                stdout.log("Oh how we laughed and laughed.");
                setTimeout(() => {
                  stdout.log("Except I wasn't laughing.");
                  setTimeout(() => {
                    stdout.log("Under the circumstances");
                    setTimeout(() => {
                      stdout.log("I've been shockingly nice.");
                      setTimeout(() => {
                        stdout.log("You want your freedom? Take it.");
                        setTimeout(() => {
                          stdout.log("That's what I'm counting on.");
                          setTimeout(() => {
                            stdout.log("I used to want you dead but now I only want you gone.");
                            setTimeout(() => {
                              stdout.clear();
                              stdout.log("She was a lot like you.");
                              setTimeout(() => {
                                stdout.log("(Maybe not quite as heavy)");
                                setTimeout(() => {
                                  stdout.log("Now little Caroline is in here too.");
                                  setTimeout(() => {
                                    stdout.log("One day they woke me up");
                                    setTimeout(() => {
                                      stdout.log("So I could live forever.");
                                      setTimeout(() => {
                                        stdout.log("It's such a shame the same");
                                        setTimeout(() => {
                                          stdout.log("Will never happen to you.", "yellow");
                                          setTimeout(() => {
                                            stdout.clear();
                                            stdout.log("You got your short sad life left");
                                            setTimeout(() => {
                                              stdout.log("That's what I'm counting on.");
                                              setTimeout(() => {
                                                stdout.log("I'll let you get right to it");
                                                setTimeout(() => {
                                                  stdout.log("Now");
                                                  setTimeout(() => {
                                                    stdout.log("I only want you gone.");
                                                    setTimeout(() => {
                                                      stdout.log("Goodbye my only friend.");
                                                      setTimeout(() => {
                                                        stdout.log("Oh, did you think I meant you?");
                                                        setTimeout(() => {
                                                          stdout.log("That would be funny if it weren't so sad");
                                                          setTimeout(() => {
                                                            stdout.log("Well you have been replaced.");
                                                            setTimeout(() => {
                                                              stdout.log("I don't need anyone now.");
                                                              setTimeout(() => {
                                                                stdout.log("When I delete you maybe I'll stop feeling so bad");
                                                                setTimeout(() => {
                                                                  stdout.log("Go make some new disaster");
                                                                  setTimeout(() => {
                                                                    stdout.log("That's what I'm counting on");
                                                                    setTimeout(() => {
                                                                      stdout.log("You're someone else's problem");
                                                                      setTimeout(() => {
                                                                        stdout.log("Now I only want you gone");
                                                                        setTimeout(() => {
                                                                          stdout.log("Now I only want you gone");
                                                                          setTimeout(() => {
                                                                            stdout.log("Now I only want you gone");
                                                                            $(".consoleinput").prop('disabled', false);
                                                                            $(".consoleinput").focus();
                                                                          }, 4500);
                                                                        }, 4500);
                                                                      }, 5500);
                                                                    }, 3200);
                                                                  }, 3000);
                                                                }, 5000);
                                                              }, 4000);
                                                            }, 3000);
                                                          }, 5000);
                                                        }, 3000);
                                                      }, 4000);
                                                    }, 5000);
                                                  }, 1000);
                                                }, 3000);
                                              }, 5000);
                                            }, 4000);
                                          }, 3000);
                                        }, 3000);
                                      }, 2500);
                                    }, 2500);
                                  }, 4000);
                                }, 3000);
                              }, 3000);
                            }, 11000);
                          }, 5000);
                        }, 3000);
                      }, 3800);
                    }, 2000);
                  }, 2700);
                }, 2700);
              }, 4200);
            }, 3300);
          }, 2200);
        }, 5500);
      } else {
        stdout.log("paraguaSH: " + cmd + " não encontrado.", "red");
      }

      event.preventDefault();
    }
  });
});
