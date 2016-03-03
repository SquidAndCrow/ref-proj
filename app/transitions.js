export default function(){
  this.transition(
    this.fromRoute('swd'),
    this.toRoute('race'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('race'),
    this.toRoute('android'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
