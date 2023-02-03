// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  const longPasswords = passwords.filter(p => p.length >= 9);
  return longPasswords;
}
