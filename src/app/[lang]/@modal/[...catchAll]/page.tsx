// Any route the modal slot does not intercept (e.g. a case study) renders no modal,
// so an open modal closes when the visitor navigates elsewhere.
export default function CatchAll() {
  return null;
}
