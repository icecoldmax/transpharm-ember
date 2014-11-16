export default function() {
  this.transition(
    this.toRoute("dict.feelings", "dict.diseases", "dict.medicines", "dict.new"),
    this.use("toDown"),
    this.reverse("toUp")
  );
}
