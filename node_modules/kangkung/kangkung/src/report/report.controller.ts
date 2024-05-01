/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    HttpCode,
    ParseUUIDPipe,
    ParseEnumPipe,
  } from '@nestjs/common';
  import { ReportType } from 'src/data';
  import { ReportService } from 'src/report/report.service';
  import {
    CreateReportDto,
    UpdateReportDto,
    ReportResponseDto,
  } from 'src/dtos/report.dto';
  // import { education } from './registerEmployee';
  
  @Controller('report/:type')
  export class ReportController {
    constructor(private readonly reportService: ReportService) {}
  
    // @Get()
    // getAllEmployee(@Param('type') type: string) {
    //   const educationType =
    //     type === 'sma'
    //       ? education.SMA
    //       : type === 'smp'
    //       ? education.SMP
    //       : education.SD;
  
    //   return this.appService.getAllEmployee(educationType);
    // }
  
    // #buatpemisah;
    @Get()
    getAllReports(
      @Param('type', new ParseEnumPipe(ReportType)) type: string,
    ): ReportResponseDto[] {
      const reportType =
        type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.getAllReports(reportType);
    }
  
    @Get(':id')
    getReportById(
      @Param('type', new ParseEnumPipe(ReportType)) type: string,
      @Param('id', ParseUUIDPipe) id: string,
    ): ReportResponseDto {
      console.log(id, typeof id);
      const reportType =
        type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.getReportById(reportType, id);
    }
  
    @Post()
    createReport(
      @Body()
      { amount, source }: CreateReportDto,
      @Param('type', new ParseEnumPipe(ReportType)) type: string,
    ): ReportResponseDto {
      const reportType =
        type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.createReport(reportType, { amount, source });
    }
  
    @Put(':id')
    updateReport(
      @Param('type', new ParseEnumPipe(ReportType)) type: string,
      @Param('id') id: string,
      @Body()
      body: UpdateReportDto,
    ): ReportResponseDto {
      const reportType =
        type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.updateReport(reportType, id, body);
    }
  
    @HttpCode(204)
    @Delete(':id')
    deleteReport(@Param('id') id: string) {
      return this.reportService.deleteReport(id);
    }
  }