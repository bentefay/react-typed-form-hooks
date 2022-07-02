nixpkgsSource:
let
  nixpkgs = import nixpkgsSource {};
in
with (nixpkgs); stdenv.mkDerivation rec {
  name = "env";

  env = buildEnv {
    name = name;
    paths = buildInputs;
  };

  buildInputs = [
    niv
    nodejs-16_x
    yarn
  ] ++ lib.optionals stdenv.isLinux [
    glibcLocales
  ];
}
