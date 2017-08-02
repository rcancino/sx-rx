import { ErrorHandler } from '@angular/core';

/**
 * Custom implementation of ErrorHandler
 */
export  class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.log('SX-Error handler:', error);
  }
}
