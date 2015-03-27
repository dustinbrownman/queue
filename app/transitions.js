export default function(){
  this.transition(
    this.fromRoute('queue.index'),
    this.toRoute('ticket-details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('queue'),
    this.toRoute('statistics'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
