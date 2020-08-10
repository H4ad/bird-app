/**
 * A classe que inclui uma implementação do método de TrackBy para otimizar os NgFors
 */
export class TrackablePage {
  /**
   * Método que retorna a identificação do item da lista para ser usado
   * para verificar se o item já existe na lista, caso exista, não
   * deve fazer alterações no HTML.
   *
   * @param index O indice desse item na lista
   * @param value As informações do item
   */
  public trackById(index: number, value: { id: number }): number {
    return value.id;
  }
}
