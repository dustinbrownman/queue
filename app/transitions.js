export default function(){
  this.transition(
    this.fromRoute('queue.index'),
    this.toRoute('queue.ticket-details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('queue.index'),
    this.toRoute('queue.statistics'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
