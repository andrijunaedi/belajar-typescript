class Bird {
  private feed: number = 2;

  /**
   * * return type
   * ? dituliskan akhir method
   * ? ini wajib return value number
   */
  getFeed(): number {
    return this.feed;
  }

  /**
   * * void method
   * ? tidak boleh ada return value
   */
  flying(): void {
    console.log('terbang');
  }

  /**
   * * Async method
   * ? Menggunakan type Promise<T>
   */
  async eating(): Promise<string> {
    return 'String';
  }
}
