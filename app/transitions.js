export default function() {
  this.transition(
    this.toRoute("dict.feelings", "dict.diseases"),
    this.use("toDown"),
    this.reverse("toUp")
  );
}
